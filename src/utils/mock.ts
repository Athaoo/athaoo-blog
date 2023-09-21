export type TreeListNode = {
  key: string
  title: string
  children?: TreeListNode[]
}

export type FlatTreeListNode = TreeListNode & {
  level: number
}

export function generateRandomTreeListData(length: number, maxDepth: number) {
  const data = [] as TreeListNode[]

  function generateData(depth: number, idx: number, parentId: string) {
    if (depth > maxDepth) {
      return null
    }

    const key = `${parentId}${parentId !== '' ? '-' : ''}${idx}`
    const item = {
      key,
      title: `Item ${key}`,
    } as TreeListNode

    if (depth < maxDepth && Math.random() < 0.5) {
      item.children = []
      const numChildren = Math.floor(Math.random() * 5) + 1
      for (let i = 0; i < numChildren; i++) {
        const child = generateData(depth + 1, i, key)
        if (child) {
          item.children.push(child)
        }
      }
    }

    return item
  }

  for (let i = 0; i < length; i++) {
    const item = generateData(0, i, '')
    if (item) {
      data.push(item)
    }
  }

  return data
}

function calculateTotalNodes(data) {
  if (!data || data.length === 0) {
    return 0
  }

  let totalNodes = 0

  for (const item of data) {
    totalNodes++ // 每个节点都增加 1

    if (item.children) {
      totalNodes += calculateTotalNodes(item.children) // 递归计算子节点的总数
    }
  }

  return totalNodes
}

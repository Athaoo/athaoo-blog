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

export function flatVTreeListData(data: TreeListNode[]) {
  const res = []
  if (!data?.length) return res
  const keyCache = new Set()

  // dfs 先序遍历
  for (let i = 0; i < data.length; i++) {
    const stack = [{ ...data[i], level: 0 }]
    while (stack.length) {
      const cur = stack.pop()

      // 为了先序，需要反向将children入栈，以确保首个children第一个出栈，同时记录树层级level
      if (cur?.children?.length) {
        for (let j = cur.children.length - 1; j >= 0; j--) {
          const child = cur.children[j]
          stack.push({ ...child, level: cur.level + 1 })
        }
      }

      res.push(cur)
    }
  }
  return res
}

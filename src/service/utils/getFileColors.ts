import * as fs from 'fs'

interface iReadColorsFileData {
  (compileFilePath: string): Promise<iFileResult>
}

interface iColorJSON {
  [color: string]: iColorJSONContent
}

export interface iColorJSONContent {
  variable: string
  commit: string
}

export interface iFileResult {
  [color: string]: {} | iColorJSON
}

// 讀取 colors file 變倒出 fileData: string
const readColorsFileData: iReadColorsFileData = (compileFilePath) => new Promise(reslove => {
  try {
    const data: Buffer = fs.readFileSync(compileFilePath)
    reslove(compilerColorsFileData(data.toString()))
  } catch (err) {
    reslove({})
  }
})

// 將 colors file 原數據從 string 轉換成 json
const compilerColorsFileData = (input: string): iColorJSON => {
  const result: iColorJSON = {}
  const matchVariableAndColors: RegExpMatchArray | null = input.match(/(\$[A-z0-9-_]*)|(:\s?[^$|#|A-z0-9(,#\.)\s;]*[/]{0,2}.*[^$]?)/g)
  if(matchVariableAndColors !== null) {
    for (let i = 0; i < matchVariableAndColors.length; i++) {
      const variable = matchVariableAndColors[i].substr(1, matchVariableAndColors[i].length)
      const content = matchVariableAndColors[++i].replace(/[:\s\n;]/g, '')
      const [color, commit] = content.replace('//', 'frankHandsome!').split('frankHandsome!')
      result[color] = {
        variable,
        commit
      }
    }
  }
  return result
}

export default readColorsFileData
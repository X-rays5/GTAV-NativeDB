import { Native } from '../context'

export interface CodeGenType {
  pointers: number
  baseType: string
  isConst: boolean
}

export interface CodeGenParam {
  type: CodeGenType
  name: string
}

export interface CodeGenNative {
  hash: string
  jhash?: string
  params: CodeGenParam[]
  returnType: CodeGenType
  name: string
  comment: string
  build?: string
  oldNames?: string[]
}

export interface CodeGenFunction {
  returnType: string
  name: string
  params: CodeGenParam
}

export interface CodeGeneratorFile {
  name: string
  extension: string
  content: string
  mimeType: string
}

export default interface ICodeGenerator {
  start(): this

  end(): this

  nativeToCodeGenNative(native: Native): CodeGenNative

  addNative(native: CodeGenNative): this

  pushNamespace(name: string): this

  popNamespace(): this

  get(): string

  submitExtraFile(file: CodeGeneratorFile): void

  getExtraFiles(): CodeGeneratorFile[]

  clearExtraFiles(): void
}

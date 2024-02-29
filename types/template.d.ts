type Color = (str: string | number) => string

interface TemplateType {
  name: string
  display: string
  color: Color
}

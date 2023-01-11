const propTypesTemplate = (
  { imports, interfaces, componentName, props, jsx },
  { tpl },
) => {
  return tpl`${imports}
import IconHoc from "../IconHoc";
${interfaces}
function ${componentName}(${props}) {
  return ${jsx};
}
export default IconHoc(${componentName});
  `
}

module.exports = propTypesTemplate
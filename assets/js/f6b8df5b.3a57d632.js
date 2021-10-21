"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[267],{2066:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],s={id:"custom-component",title:"Creating Custom Components"},p="Notes",u={unversionedId:"guide/custom-component",id:"guide/custom-component",isDocsHomePage:!1,title:"Creating Custom Components",description:"Add Wrappers have a corresponding function export (fieldToTextField, fieldToCheckbox etc.) that encapsulate the logic used to map formik props into the MUI shapes",source:"@site/docs/guide/custom-component.md",sourceDirName:"guide",slug:"/guide/custom-component",permalink:"/formik-material-ui/docs/guide/custom-component",editUrl:"https://github.com/stackworx/formik-material-ui/edit/master/docs/guide/custom-component.md",tags:[],version:"current",frontMatter:{id:"custom-component",title:"Creating Custom Components"},sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/formik-material-ui/docs/guide/getting-started"},next:{title:"Migrating",permalink:"/formik-material-ui/docs/guide/migrating"}},d=[{value:"Upper Casing Field",id:"upper-casing-field",children:[]}],l={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"notes"},"Notes"),(0,r.kt)("p",null,"Add Wrappers have a corresponding function export (",(0,r.kt)("inlineCode",{parentName:"p"},"fieldToTextField"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldToCheckbox")," etc.) that encapsulate the logic used to map formik props into the MUI shapes"),(0,r.kt)("h1",{id:"examples"},"Examples"),(0,r.kt)("h2",{id:"upper-casing-field"},"Upper Casing Field"),(0,r.kt)("p",null,"A simple test input that always uppercases the input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import TextField from '@mui/material/TextField';\nimport { fieldToTextField, TextFieldProps } from 'formik-material-ui';\n\nfunction UpperCasingTextField(props: TextFieldProps) {\n  const {\n    form: { setFieldValue },\n    field: { name },\n  } = props;\n  const onChange = React.useCallback(\n    (event) => {\n      const { value } = event.target;\n      setFieldValue(name, value ? value.toUpperCase() : '');\n    },\n    [setFieldValue, name]\n  );\n  return <TextField {...fieldToTextField(props)} onChange={onChange} />;\n}\n")))}c.isMDXComponent=!0}}]);
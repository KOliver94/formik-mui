"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[196],{6131:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],m={id:"getting-started",title:"Getting Started"},l=void 0,u={unversionedId:"guide/getting-started",id:"guide/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Installation",source:"@site/docs/guide/getting-started.md",sourceDirName:"guide",slug:"/guide/getting-started",permalink:"/formik-material-ui/docs/guide/getting-started",editUrl:"https://github.com/stackworx/formik-material-ui/edit/master/docs/guide/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"someSidebar",next:{title:"Creating Custom Components",permalink:"/formik-material-ui/docs/guide/custom-component"}},s=[{value:"Installation",id:"installation",children:[{value:"Material-UI Lab (Optional)",id:"material-ui-lab-optional",children:[]}]},{value:"Quick Start",id:"quick-start",children:[]},{value:"Configuring Components",id:"configuring-components",children:[]},{value:"Quick Start (Lab)",id:"quick-start-lab",children:[]},{value:"Configuring Components",id:"configuring-components-1",children:[]}],d={toc:s};function p(n){var e=n.components,t=(0,r.Z)(n,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add formik formik-material-ui @mui/material @emotion/react @emotion/styled\n")),(0,a.kt)("h3",{id:"material-ui-lab-optional"},"Material-UI Lab (Optional)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add @date-io/date-fns @mui/lab formik-material-ui-lab\n")),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{4,39,46}","{4,39,46}":!0},"import { Button, LinearProgress } from '@mui/material';\nimport { Formik, Form, Field } from 'formik';\nimport { TextField } from 'formik-material-ui';\nimport * as React from 'react';\n\ninterface Values {\n  email: string;\n  password: string;\n}\n\nfunction App() {\n  return (\n    <Formik\n      initialValues={{\n        email: '',\n        password: '',\n      }}\n      validate={(values) => {\n        const errors: Partial<Values> = {};\n        if (!values.email) {\n          errors.email = 'Required';\n        } else if (\n          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(values.email)\n        ) {\n          errors.email = 'Invalid email address';\n        }\n        return errors;\n      }}\n      onSubmit={(values, { setSubmitting }) => {\n        setTimeout(() => {\n          setSubmitting(false);\n          alert(JSON.stringify(values, null, 2));\n        }, 500);\n      }}\n    >\n      {({ submitForm, isSubmitting }) => (\n        <Form>\n          <Field\n            component={TextField}\n            name=\"email\"\n            type=\"email\"\n            label=\"Email\"\n          />\n          <br />\n          <Field\n            component={TextField}\n            type=\"password\"\n            label=\"Password\"\n            name=\"password\"\n          />\n          {isSubmitting && <LinearProgress />}\n          <br />\n          <Button\n            variant=\"contained\"\n            color=\"primary\"\n            disabled={isSubmitting}\n            onClick={submitForm}\n          >\n            Submit\n          </Button>\n        </Form>\n      )}\n    </Formik>\n  );\n}\n")),(0,a.kt)("p",null,"Note: that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Field")," wrapper is not used, for more details on why see the ",(0,a.kt)("a",{parentName:"p",href:"/formik-material-ui/docs/guide/faq"},"FAQ"),"."),(0,a.kt)("h2",{id:"configuring-components"},"Configuring Components"),(0,a.kt)("p",null,"Several properties are purposefully excluded, please see the ",(0,a.kt)("a",{parentName:"p",href:"/formik-material-ui/docs/guide/faq"},"FAQ")," for details."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import AccountCircle from \'@mui/icons-material/AccountCircle\';\nimport InputAdornment from \'@mui/material/InputAdornment\';\nimport { TextField } from \'formik-material-ui\';\n\n<TextField\n  name="customized"\n  label="Outlined"\n  variant="outlined"\n  InputProps={{\n    startAdornment: (\n      <InputAdornment position="start">\n        <AccountCircle />\n      </InputAdornment>\n    ),\n  }}\n/>;\n')),(0,a.kt)("h2",{id:"quick-start-lab"},"Quick Start (Lab)"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/components/about-the-lab/"},"MUI ",(0,a.kt)("em",{parentName:"a"},"About the lab"))," for more information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{4-8,9,12,16,32,34,36}","{4-8,9,12,16,32,34,36}":!0},"import AdapterDateFns from '@mui/lab/AdapterDateFns'; // Depending on the library you picked\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\nimport Button from '@mui/material/Button';\nimport LinearProgress from '@mui/material/LinearProgress';\nimport { Formik, Form, Field } from 'formik';\nimport { DatePicker, DateTimePicker, TimePicker } from 'formik-material-ui-lab';\nimport * as React from 'react';\n\nfunction App() {\n  return (\n    <LocalizationProvider dateAdapter={AdapterDateFns}>\n      <Formik\n        initialValues={{\n          date: new Date(),\n          time: new Date(),\n          dateTime: new Date(),\n        }}\n        onSubmit={(values, { setSubmitting }) => {\n          setTimeout(() => {\n            setSubmitting(false);\n            alert(JSON.stringify(values, null, 2));\n          }, 500);\n        }}\n      >\n        {({ submitForm, isSubmitting }) => (\n          <Form>\n            <Field\n              component={DatePicker}\n              name=\"date\"\n              label=\"Date\"\n              textField={{ helperText: 'Helper text', variant: 'filled' }}\n            />\n            <br />\n            <Field\n              component={DateTimePicker}\n              name=\"dateTime\"\n              label=\"Date Time\"\n            />\n            <Field component={TimePicker} name=\"time\" label=\"Time\" />\n            <br />\n            {isSubmitting && <LinearProgress />}\n            <br />\n            <Button\n              variant=\"contained\"\n              color=\"primary\"\n              disabled={isSubmitting}\n              onClick={submitForm}\n            >\n              Submit\n            </Button>\n          </Form>\n        )}\n      </Formik>\n    </LocalizationProvider>\n  );\n}\n")),(0,a.kt)("h2",{id:"configuring-components-1"},"Configuring Components"),(0,a.kt)("p",null,"Several properties are purposefully excluded, please see the ",(0,a.kt)("a",{parentName:"p",href:"/formik-material-ui/docs/guide/faq"},"FAQ")," for details."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import AccountCircle from \'@mui/icons-material/AccountCircle\';\nimport InputAdornment from \'@mui/material/InputAdornment\';\nimport { TextField } from \'formik-material-ui\';\n\n<TextField\n  name="customized"\n  label="Outlined"\n  variant="outlined"\n  InputProps={{\n    startAdornment: (\n      <InputAdornment position="start">\n        <AccountCircle />\n      </InputAdornment>\n    ),\n  }}\n/>;\n')))}p.isMDXComponent=!0}}]);
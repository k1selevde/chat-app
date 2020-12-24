type validateFormFieldType = "" | "success" | "warning" | "error" | "validating"

type validateFFProps = {
    key: any,
    touched: boolean,
    errors: any
}

export default (key: any, touched: any, errors : any): validateFormFieldType => {
   if (touched[key]) {
       if (errors[key]) {
           return "error"
       } else {
           return "success"
       }
   } else {
       return "success";
   }
}
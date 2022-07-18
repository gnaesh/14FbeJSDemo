import React,{useEffect, useRef} from 'react'


export default function RefDemo() {
    const schema = yup.object({
        list: yup.array(),
        number: yup.number(),
        date: yup.date()
      });
      
      <Form schema={schema}>
        <label>
          A list
          <Form.Field name="list" />
        </label>
        <label>
          A number picker
          <Form.Field name="number" />
        </label>
        <label>
          A date picker
          <Form.Field name="date" />
        </label>
      </Form>;
    
}

import React from 'react'
import Wrapper from '../../components/Wrapper'
import { useFormik } from 'formik';
import axios from 'axios'

const AddProduct = () => {
    const formik = useFormik({
        initialValues: {
          title: '',
          description:'',
          price:'',
          imageURL:''
        },
        onSubmit: values => {
            if(values.title !=='' || values.description!=='' || values.price!=='' || values.imageURL!==''){
                // alert(JSON.stringify(values, null, 2));
                axios.post('products',{
                    title:values.title,
                    description: values.description,
                    price: values.price,
                    image: values.imageURL
                })
                .then((res)=>{
                    console.log(res)
                    alert('Product added')
                    values.title=''
                    values.description=''
                    values.price = ''
                    values.imageURL=''
                })
                .catch((err)=>{
                    alert(err)
                })
            }
        },
      });
      return (
        <Wrapper>
            <div className="row my-3 text-center">
            <h3>Add new product</h3>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <div className="card">
                <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Product Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            className='form-control'
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Product Descripton</label>
                        <textarea
                            id="description"
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            className='form-control'
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Product Price</label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            className='form-control'
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageURL">Image URL</label>
                        <input
                            id="imageURL"
                            name="imageURL"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.imageURL}
                            className='form-control'
                            required
                        />
                    </div>
                
                    <button className='btn btn-primary my-3' type="submit">Submit</button>
                    </form>
                </div>
            </div>
                </div>
                <div className="col-md-2"></div>
            </div>
           
        </Wrapper>
      );

}

export default AddProduct
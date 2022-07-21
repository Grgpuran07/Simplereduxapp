import React, { useEffect } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions'
import "./Productdetail.css"

const ProductDetail = () => {
    const {productId} = useParams()
    const product = useSelector((state)=>state.product)
    const {image,title,price,category,description} = product
    // console.log(productId)
    const dispatch = useDispatch()
    console.log(product)

    const fetchProductDetail =async () =>{
       const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
        console.log(err)
       })

       dispatch(selectedProduct(response.data))
    }

    useEffect(()=>{
        if(productId && productId !== "")fetchProductDetail()
        return (()=>{
            dispatch(removeSelectedProduct())
        })
    },[productId])


  return (
    <div className='maincard'>
    <div style={{height:"40px",width:"100%"}}></div>
    <p>Name: {title}</p>
    <p>Category: {category}</p>
     <p>Price : ${price}</p>
    <img src={image} alt={title}/>
    <p>Price : ${price}</p>
     <p>{description}</p>
    </div>
  )
}

export default ProductDetail
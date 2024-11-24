import React from "react";
import styles from './LoginModal.module.css'
import { useState, useEffect } from "react"
import { useAuthentication } from "../Hooks/useAuthentication";
import { useNavigate } from "react-router-dom"


function LoginModal({ isOpen, onClose}) {
    if (!isOpen) return null;
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const { login, error:authError, loading } = useAuthentication()
    const navigate = useNavigate()

    const handlerSubmit = async(e) =>{
        e.preventDefault()
        setError('')
        const user = {
            email,
            password
        }

        const res = await login(user)

        console.table(res)
       
    }

    return (
      <div className="modal-overlay">
        <div className="modal-container">
            <button className="close-btn" onClick={onClose}>
                &times;
            </button>

        </div>
      </div>
    )
}
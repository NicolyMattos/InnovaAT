import "./App.css"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"

// hooks

import { useState, useEffect } from "react"
import { useAuthentication } from "./Hooks/useAuthentication"

// pages 
import Home from "./Pages/Home/Home"

// components
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

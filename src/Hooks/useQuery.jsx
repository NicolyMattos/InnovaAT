import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

export function useQuerry(){
    const { search } = useLocation()

    return useMemo(() => new URLSearchParams(search),[search])
}
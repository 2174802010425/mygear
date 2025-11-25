import { NextRequest } from "next/server"

export const POST  = async (req : NextRequest) => {
    const {username, email} = await req.json()

    try {
        
    } catch (error) {
        
    }
}
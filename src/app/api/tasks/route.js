import { NextResponse } from "next/server";
import getUsers from "@/libs/getUsers";
import connection from "@/libs/connect";

export async function GET() {
    try {
        // Usa la conexión existente para realizar consultas
        const response = await getUsers(connection);
        console.log("response from db", response);
        return NextResponse.json(response);
    } catch (error) {
        console.error("Error al obtener datos de la base de datos:", error);
        return NextResponse.error("Error al obtener datos de la base de datos");
    }
}

export function POST() {
    return NextResponse.json("Creando tareas");
}

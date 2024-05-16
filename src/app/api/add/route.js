import { NextResponse } from "next/server";
import createUser from "@/libs/create";
import connection from "@/libs/connect";

export async function POST(request) {
    try {
        const body = await request.json();

        const response = await createUser(connection, body.name, body.last_name, body.age);
        return NextResponse.json({"response from post, creando":response});
    } catch (error) {
        console.error("Error al obtener datos de la base de datos:", error);
        return NextResponse.error("Error al obtener datos de la base de datos");
    }
}

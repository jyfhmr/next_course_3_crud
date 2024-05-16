import { NextResponse } from "next/server";
import deleteUser from "@/libs/delete";
import connection from "@/libs/connect";

export async function POST(request) {
    console.log("RECIBIENDO")
    try {
        const body = await request.json();
        console.log(body.id);

        const response = await deleteUser(connection,body.id);
        return NextResponse.json({"response from post (deleting)":response});
    } catch (error) {
        console.error("Error al obtener datos de la base de datos:", error);
        return NextResponse.error("Error al obtener datos de la base de datos");
    }
}

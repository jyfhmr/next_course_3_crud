import { NextResponse } from "next/server";
import editUser from "@/libs/edit";
import connection from "@/libs/connect";

export async function POST(request) {
    try {
        const body = await request.json();
        console.log(body.id);

        const response = await editUser(connection, body.id, body.name, body.last_name, body.age);
        return NextResponse.json({"response from post":response});
    } catch (error) {
        console.error("Error al obtener datos de la base de datos:", error);
        return NextResponse.error("Error al obtener datos de la base de datos");
    }
}

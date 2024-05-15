import { NextResponse } from "next/server";
import cheerio from "cheerio";


const rates = {
    "usd": "",
    "eur": ""
}

const bankUrl = 'https://www.bcv.org.ve/';

function extractRateFromHTML(html) {

    const $ = cheerio.load(html);
    // Seleccionar el elemento <strong> y extraer su textContent, donde el banco guarda las tasas
    const change = $('strong').text().trim();
    return change;
}

function getRate() {
    return new Promise((resolve, reject) => {
        fetch(bankUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                const $ = cheerio.load(html);

                // Obtener el HTML de la sección de cambio de divisa USD
                const usdDiv = $('#dolar');
                const usdHtml = usdDiv.html();
        
                // Obtener el HTML de la sección de cambio de divisa EUR
                const eurDiv = $('#euro');
                const eurHtml = eurDiv.html();
        
                // Obtener el cambio de divisa USD y EUR y almacenarlos en el objeto changes
                rates.usd = extractRateFromHTML(usdHtml);
                rates.eur = extractRateFromHTML(eurHtml);

                // Devolver el objeto de tasas de cambio
                resolve(rates);
            })
            .catch(error => {
                console.error('Fetch failed:', error);
                reject(error);
            });
    });
}


export async function GET() {

    const response = await getRate()
   // const data = await response.json()

   console.log(response)
    return NextResponse.json(response)
}
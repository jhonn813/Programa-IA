let botao = document.querySelector(".botao-gerador")
let  chave = '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'
let endereco = "https://api.groq.com/openai/v1/chat/completions"

// Criei a funcao que será chamada quando clicar 
// no botao

async function gerarCodigo() {

    let textUsuario = document.querySelector(".caixa-texto").value
    let blocoCodigo = document.querySelector(".bloco-codigo")
    let resultadoCodigo = document.querySelector(".resultado")

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + chave
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: "Você é um gerador de código HTML e CSS. Responda SOMENTE com código puro. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se pedir algo quicando, use translateY no @keyframes. Se pedir algo girando, use rotate"
                },
                {
                    role: "user",
                    content: textUsuario
                }
            ]
        })
    })
    let dados = await resposta.json()
    let= resul = dados.choices[0].message.content

    blocoCodigo.textContent = resul
    resultadoCodigo.srcdoc = resul

}

// ficar de olho no botao, quando clicado chamar o gerarCodigo
botao.addEventListener("click", gerarCodigo)

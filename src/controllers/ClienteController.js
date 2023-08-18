const Cliente = require('../models/Cliente');
const formatPhoneNumber = require('../utils/formatarTelefone');

module.exports = class ClienteController{

    // LISTAGEM DE TODOS OS CLIENTES
    static async getAll(req,res){
        // Busca todos os Clientes
        const listClients = await Cliente.findAll(
            {
                attributes:['id','nome','telefone','numberIsWhatsApp']
            }
        );
        res.status(200).json(listClients);
    }

    // CRIA UM NOVO CLIENTE
    static async addCliente(req,res){
        // Valores recebidos no body
        let {nome, telefone, numberIsWhatsApp} = req.body;

         // Verifica se os campos foram preenchidos.
         if(!nome || !telefone || !numberIsWhatsApp){
            return res.status(400).json({'message':'Falha ao validar dados. Tente novamente!'});
        }

        // Regex para verificar se o nome possui caracter especial.
        let regexNome = /[^a-zA-Z\sÀ-ÿ]/g;

        // Regex para verificar se o numero possui caracters que não sejam números
        let regexTelefone = /\D/g;

        // Verifica a integridade dos dados fornecidos.
        if(regexNome.test(nome) || regexTelefone.test(telefone) || telefone.length < 11 || telefone.length > 11){
            return res.status(400).json({'message':'Falha ao validar dados. Tente novamente!'});
        }

        // Tratamento do nome
        nome = nome.trim();
        nome = nome.toLowerCase();
        
        // Tratamento do telefone
            telefone = telefone.trim()
            telefone = formatPhoneNumber(telefone);


        // Inserção dos dados no banco
        try {
            const newCliente = await Cliente.create({
                nome: nome,
                telefone: telefone,
                numberIsWhatsApp: numberIsWhatsApp
            });

        
            res.status(201).json({"message":"Cliente adicionado."});

        } catch (error) {
            // Em caso de erro, exibir no console e enviar status 500.
            console.log(error);
            res.status(500).json({'message':'Ocorreu um erro ao processar sua solicitação.'});
        }

    }

    // REMOVE UM CLIENTE 
    static async deleteCliente(req,res){
        const id = req.params.id;
        
        try {
            await Cliente.destroy({where:{id: id}});
            res.status(204).json({});
        } catch (error) {
            console.log(error);
            res.status(500).json({'message':'Ocorreu um erro ao processar sua solicitação.'});
        }
    }

}
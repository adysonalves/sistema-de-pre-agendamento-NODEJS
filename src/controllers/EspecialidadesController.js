const Especialidade = require('../models/Especialidade');

module.exports = class EspecialidadesController{

    // LISTAGEM DE TODAS ESPECIALIDADES
    static async getAll(req,res){
        const especialidades = await Especialidade.findAll({
            attributes:['id','descricao']
        });

        res.status(200).json(especialidades);
    }

    // CRIA UMA NOVA ESPECIALIDADE
    static async addEspecialidade(req,res){
        let descricao = req.body.descricao;
        let regexDescricao = /[^a-zA-Z\sÀ-ÿ]/g;

        //VERIFICA SE A INTEGRIDADE DA INFORMAÇÃO
        if(!descricao || regexDescricao.test(descricao)){
            return res.status(400).json({'message':'Falha ao validar dados. Tente novamente!'});
        }

        // Tratamento da Descrição
        descricao = descricao.trim();
        descricao = descricao.toLowerCase();

        // Inserção dos dados no banco
        try {
            await Especialidade.create({descricao: descricao})
            res.status(201).json({"message":"Especialidade adicionada!"})
        } catch (error) {
            // Em caso de erro, exibir no console e enviar status 500.
            console.log(error);
            res.status(500).json({'message':'Ocorreu um erro ao processar sua solicitação.'});
        }

    }

    // BUSCA UM REGISTRO POR ID
    static async getById(req,res){
        const {id} = req.params;

        try {

            let especialidade = await Especialidade.findByPk(id, {attributes:['id', 'descricao']});

            //Caso não encontre especialidade, seta um array vazio.
            if(!especialidade){
                especialidade = [];
            }

            // Se existir especialidade, ela será retornada.
            res.status(200).json(especialidade);

        } catch (error) {

            // Em caso de erro, exibir no console e enviar status 500.
            console.log(error);
            res.status(500).json({'message':'Ocorreu um erro ao processar sua solicitação.'});

        }
        
        
    }

    // ALTERAR DESCRIÇÃO DA ESPECIALIDADE
    static async update(req,res){

        const {id} = req.params;
        let descricao = req.body.descricao;
        let regexDescricao = /[^a-zA-Z\sÀ-ÿ]/g;

        // VERIFICA SE A INTEGRIDADE DA INFORMAÇÃO
        if(!descricao || regexDescricao.test(descricao)){
            return res.status(400).json({'message':'Falha ao validar dados. Tente novamente!'});
        }

        // Tratamento da Descrição
        descricao = descricao.trim();
        descricao = descricao.toLowerCase();

        // Atualiza informação no banco de dados;
        try {

            await Especialidade.update({
                descricao: descricao
            }, {where:{id:id}});
            res.status(204).json({})

        } catch (error) {

            // Em caso de erro, exibir no console e enviar status 500.
            console.log(error);
            res.status(500).json({'message':'Ocorreu um erro ao processar sua solicitação.'});
        }

    }

    // Exclusão de especialidades
    static async delete(req,res){
        const {id} = req.params;

        try {
            await Especialidade.destroy({where:{id:id}});
            res.status(204).json({});

        } catch (error) {

            // Em caso de erro, exibir no console e enviar status 500.
            console.log(error);
            res.status(500).json({'message':'Ocorreu um erro ao processar sua solicitação.'});
            
        }
    }


}
function RouterList(app){
    const ClienteRoutes = require('./ClienteRoutes');
    app.use('/api/cliente', ClienteRoutes);
    
    const EspecialidadesRouter = require('./EspecialidadesRoutes');
    app.use('/api/especialidade', EspecialidadesRouter);
}

module.exports = RouterList;
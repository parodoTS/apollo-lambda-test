module.exports = {
    Query: {
      getHospital: (_, {id}, {dataSources}) =>
        dataSources?.hospitalAPI?.getHospital({id: id}),
      listHospital:(_, __, {dataSources}) =>
        dataSources?.hospitalAPI?.listHospital(),
      getDirector: (_, {id}, {dataSources}) =>
        dataSources?.directorAPI?.getDirector({id: id}),
    },
};

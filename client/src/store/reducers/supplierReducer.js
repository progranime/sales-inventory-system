const initState = {
  suppliers: [
    {
      id: 1,
      name: 'Jeremy Espinosa',
      contact: '09157978892',
      address: 'Pasig'
    },
    {
      id: 2,
      name: 'Giancarlo Espinosa',
      contact: '09157978892',
      address: 'Pasig'
    },
    {
      id: 3,
      name: 'Moira Espinosa',
      contact: '09157978892',
      address: 'Marikina'
    }
  ],
  suppliersColumns: [
    {
      dataField: 'id',
      text: 'Id',
      sort: true
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true
    },
    {
      dataField: 'contact',
      text: 'Contact',
      sort: true
    },
    {
      dataField: 'address',
      text: 'Address',
      sort: true
    }
  ]
}

const supplierReducer = (state = initState, action) => {
  return state
}

export default supplierReducer

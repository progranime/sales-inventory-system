const initState = {
  customers: [
    {
      id: 1,
      name: 'Jeremy Espinosa',
      contact: '09157978892',
      gender: 'Male'
    },
    {
      id: 2,
      name: 'Giancarlo Espinosa',
      contact: '09157978892',
      gender: 'Male'
    },
    {
      id: 3,
      name: 'Moira Espinosa',
      contact: '09157978892',
      gender: 'Female'
    }
  ],
  customersColumns: [
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
      dataField: 'gender',
      text: 'Gender',
      sort: true
    }
  ]
}

const customerReducer = (state = initState, action) => {
  return state
}

export default customerReducer

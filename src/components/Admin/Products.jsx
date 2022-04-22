import React from 'react';
import { Button, Table } from 'react-bootstrap';

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <hr />
      <Button variant='primary' className='btn-sm' >Add new Product</Button>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>slug</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Men</td>
            <td>men</td>
            <td>
              <Button variant='info' className='btn-sm'>View</Button>
              <Button variant='warning' className='btn-sm'>Edit</Button>
              <Button variant='danger' className='btn-sm'>Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
};

export default Products;
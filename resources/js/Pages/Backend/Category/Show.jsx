import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Show = ({category}) => {
    console.log(category)
  return (
        <div>
          <center>
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                  <div className="card shadow">
                    <img src={category.url} className="card-img-top" alt="Category Image" />
                    <div className="card-body">
                      <h5 className="card-title">Name: {category.name}</h5>
                      <h5 className="card-title">Slug: {category.slug}</h5>
                    </div>
                  </div>
                </div>
            </center>

        </div>
  )
}

Show.layout = page => <BackendLayout children={page} title="Category Details" />
export default Show

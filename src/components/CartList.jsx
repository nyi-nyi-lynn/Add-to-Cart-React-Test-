import React from 'react'

const CartList = () => {
  return (
   <>
        <section>
          <div className="row px-5 align-items-center">
            <div className="col-md-10 d-flex justify-content-center align-items-center">
                <div className="col-md-2 item-img" >
                  <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80" alt="" className="img-fluid " />
                </div>
                <div className="col-md-10">
                  <h6 className=''>Basic Tee 6 pack</h6>
                  <p className='m-0 text-muted'>Size:xxs</p>
                  <p className='m-0 text-muted'>color:white</p>
                </div>
            </div>
            <div className="col-md-2">
              <input type="number" name="" className='w-50 ' id="" min={1}  />
              
            </div>
          </div>
        </section>
   </>
  )
}

export default CartList
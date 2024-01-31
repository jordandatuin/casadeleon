import { useEffect  } from 'react'


function Rate() 
{

    useEffect(() => 
    {
      document.title = `Rate page`;
    });
  
    return (
     <>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <div className="row">
            <div className="col text-white">
              <div className="card m-4 p-4 card_design">
                <h1 className="display-5 fw-bold text-center mb-3">
                  CASA DE LEON RATES
                </h1>
                <p className="text-center rate_text_size mb-1">
                  DAY TOUR 1 (9:00AM - 5:00PM)
                </p>
                <p className="rate_price_text_size text-danger text-center fw-medium mb-1">
                  ₱5,000
                </p>
                <p className="text-center m-0"><small>No Bedrom Included (20PAX MAX)</small></p>
                <p className="text-center fw-semibold"><small>Additional pax will add 200 php per head</small></p>

                <p className="text-center rate_text_size mb-1">
                  DAY TOUR 2 (9:00AM - 5:00PM)
                </p>
                <p className="rate_price_text_size text-danger text-center fw-medium mb-1">
                  ₱8,000
                </p>
                <p className="text-center m-0"><small>3 Bedrom Included (20PAX MAX).</small></p>
                <p className="text-center fw-semibold"><small>Additional pax will add 200 php per head.</small></p>

                <p className="text-center rate_text_size mb-1">
                  NIGHT TOUR (7:00PM - 7:00AM)
                </p>
                <p className="rate_price_text_size text-danger text-center fw-medium mb-1">
                  ₱11,000
                </p>
                <p className="text-center m-0"><small>3 Bedrom Included (20PAX MAX).</small></p>
                <p className="text-center fw-semibold"><small>Additional pax will add 300 php per head.</small></p>

                <p className="text-center rate_text_size mb-1">
                  FULL OVERNIGHT (2:00PM - 12:00NN)
                </p>

                <p className="rate_price_text_size text-danger text-center fw-medium mb-1">
                  ₱18,000
                </p>
                <p className="text-center m-0"><small>3 Bedrom Included (20PAX MAX).</small></p>
                <p className="text-center fw-semibold"><small>Additional pax will add 400 php per head.</small></p>

                <p className="text-center rate_text_size mb-1">
                  PAYMENT SCHEME
                </p>
                <p className="text-center m-0"><small>5,000 php : Reservation fee upon confirmation, serves as security</small></p>
                <p className="text-center m-0"><small>deposit upon check-in refundable upon check-out. Full Payment upon</small></p>
                <p className="text-center"><small>Check-in.</small></p>

                <p className="text-center rate_text_size mb-1">
                  INCLUSIONS
                </p>
                <p className="text-center m-0"><small>WIFI, TV with free use of Netflix and YouTube, Refrigerator,</small></p>
                <p className="text-center m-0"><small>Rice Cooker, Griller, Karaoke. Induction Cooker,</small></p>
                <p className="text-center m-0"><small>Water Dispenser with mineral water, Tables and Chairs for 20 pax.</small></p>

              </div>
            </div>
          </div>
        </div>
     </>
    )
  }
  
  export default Rate;
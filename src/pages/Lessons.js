import { Link } from "react-router-dom"

const Lessons = ({ map }) => {
   const lessons = [
    'https://www.youtube.com/watch?v=ZuWa827qAao&list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm&index=1', 
    'hahttps://www.youtube.com/watch?v=dggHWvFJ8Xs&list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm&index=2',
    'https://www.youtube.com/watch?v=Gn97hpEkTiM&list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm&index=3',
    'https://www.youtube.com/watch?v=AGxOWIuaBP8&list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm&index=4',
    'https://www.youtube.com/watch?v=9B3DDY27ZtE&list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm&index=5'
   ]
      
   return (
    <>

        <h1 class="text-center text-6xl mb-5 mt-5">Choose a Lesson</h1>
        <ul >
            <div class="grid grid-cols-2 gap-15 justify-center content-around">
                <div class="flex justify-center">
                    <li class="text-center text-3xl mb-3">
                        <Link to='https://www.youtube.com/watch?v=ZuWa827qAao&list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm&index=1'><img src="https://i.ytimg.com/vi/ZuWa827qAao/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAcP-qPApBEg8559YhhSQ2fDRsI1g" /></Link>
                    </li>
                </div>
                <div class="flex justify-center">
                    <li class="text-center text-3xl mb-3">
                        <Link to="https://www.youtube.com/watch?v=dggHWvFJ8Xs&list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm&index=2"><img src="https://i.ytimg.com/vi/dggHWvFJ8Xs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD-Iz6_EmEr8P0mnSXKKpJ1jd7Gbw"/></Link>
                    </li>
                </div>
                <div class="flex justify-center">
                    <li class="text-center text-3xl mb-3">
                        <Link to="https://www.youtube.com/watch?v=Gn97hpEkTiM&list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm&index=3"><img class="text-center text-3xl mt-10 mb-10" src="https://i.ytimg.com/vi/Gn97hpEkTiM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCRE0iJDYXls-z6iFEhEG2OzGtp2Q"/></Link>
                    </li>
                </div>
                <div class="flex justify-center">
                    <li class="text-center text-3xl mb-3">
                        <Link to="https://www.youtube.com/watch?v=AGxOWIuaBP8&list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm&index=4"><img class="text-center text-3xl mt-10 mb-10" src="https://i.ytimg.com/vi/AGxOWIuaBP8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAdIMbsnAznoda0ltbdUmatbxSKgA"/></Link>
                    </li>
                </div>
                <div class="flex justify-center">
                    <li class="text-center text-3xl mb-3">
                        <Link to="https://www.youtube.com/watch?v=9B3DDY27ZtE&list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm&index=5"><img class="text-center text-3xl mt-10 mb-10" src="https://i.ytimg.com/vi/9B3DDY27ZtE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDn4_f-m2CmoM--dVF7QWeukPUq4A"/></Link>
                    </li>
                </div>
                <div class="flex justify-center">
                    <li class="text-center text-3xl mb-3">
                        <Link to="https://www.youtube.com/watch?v=5PyVoMnRTlQ&list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm&index=6"><img class="text-center text-3xl mt-10 mb-10" src="https://i.ytimg.com/vi/5PyVoMnRTlQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC1C6jodoV-CvQA8ONHjCWIS1TQmw"/></Link>
                    </li>
                </div>
            </div>
        </ul>        


    </>
    
   )
}; 

export default Lessons;


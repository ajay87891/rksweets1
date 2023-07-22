'use client';




export default function CardWithImage(props) {
  return (
    
<div class="max-w-xs  bg-primary/30  border border-primary rounded-lg shadow my-10">
    <a href="#">
        <img class="w-80 h-60  object-cover rounded-xl" src={props.imgUrl} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white ">{props.title}</h5>
        </a>
        <p class="mb-3 font-normal text-white">{props.description}</p>
        {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> */}
    </div>
</div>

  )
}


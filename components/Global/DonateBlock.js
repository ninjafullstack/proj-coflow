export const DonateBlock = ({classes="m-auto"}) => {
  return (
    <div className={`mt-[33px] flex h-[254px] w-[350px] flex-col rounded-2xl border p-6 sm:w-[384px] ${classes}`}>
      <h3 className="mb-6 mt-2 px-10 text-center text-xl font-semibold">
        Donne le montant que tu veux Montant à donner
      </h3>
    
      <input type="text" placeholder="Ex : 30" className="input input-bordered mb-4 w-full" />
    
      <button className="btn h-12 w-full bg-primary text-base font-semibold text-white">
        Participer
      </button>
    </div>
  )
}

// import React from "react";
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';

// const schema = z.object({
//   email: z.string().email(),
// });

// export default function NewsletterForm() {
//   const [isChecked, setIsChecked] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const [subscribed, setSubscribed] = useState(false);

//   const onSubmit = async (data) => {
//     const res = await fetch('/api/newsletter', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const result = await res.json();
//     console.log(result);

//     reset();
//     setSubscribed(true);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Email</label>
//         <input {...register('email')} />
//         {errors.email && <span>{errors.email.message}</span>}
//       </div>

//       <button type="submit">Subscribe</button>
//       {subscribed && <p>You have subscribed successfully!</p>}
//     </form>
//   );
// }

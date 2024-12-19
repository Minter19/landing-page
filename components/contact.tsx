"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Github } from "lucide-react"

const formSchema = z.object({
  yourname: z.string().min(5, {message: "Yourname text must be at least 4 characters"}).max(50, {message: "Yourname text must be at most 50 characters"}),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(5, { message: "Message must be at least 5 characters" }).max(500, { message: "Message must be at most 500 characters" }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <section id="certificate" className="py-4 px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
    
      <h4>If you have further questions about my projects or other inquiries feel free to contact me by filling the form below.</h4>

      <div className="flex mt-4 gap-4">
        <div className="basis-1/2 p-4">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="yourname"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Enter your message" {...field} />
                    </FormControl>
                    <FormDescription>
                        Please provide a detailed message.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">Send</Button>
            </form>
            </Form>
        </div>

        <div className="basis-1/2 p-4">
            <div className="h-[85%]">
                <iframe className="w-full h-full border-0 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.758993164252!2d106.68808435!3d-6.337041999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e51b6df97375%3A0xfda9a787f303a4bd!2sJaletreng%20Riverpark%20-%20Kota%20Tangerang%20Selatan!5e0!3m2!1sid!2sid!4v1734586874059!5m2!1sid!2sid" width="0" height="0"allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="mt-4 flex flex-row gap-4">
                <div className="flex items-center gap-2 btn" ><a href="https://www.linkedin.com/in/minterrgg/" target="_blank" rel="noopener noreferrer"><Button asChild variant={"outline"} size={"icon"}><Linkedin/></Button> </a></div>
                <div className="flex items-center gap-2 btn" ><a href="https://github.com/minter19" target="_blank" rel="noopener noreferrer"><Button asChild variant={"outline"} size={"icon"}><Github/></Button> </a></div>
            </div>
        </div>
      </div>
    </section>
  )
}
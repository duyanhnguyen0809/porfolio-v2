"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can handle form submission. For example, you can send a request to a server.
    alert(
      "This feature is currently under development. Please send your message to our email address displayed on the website."
    );
    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          type="message"
          id="message"
          placeholder="Type Your Message Here."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <MessageSquare className="absolute right-6 top-4" size={20} />
      </div>
      <div className="flex justify-center xl:justify-start">
        <Button className="flex items-center max-w-[166px]" type="submit">
          Let's Talk
          <ArrowRightIcon size={20} />
        </Button>
      </div>
    </form>
  );
};

export default Form;

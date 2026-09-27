import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col font-heading pt-2 pl-6">
      <div className="flex justify-between">
        <img className="w-1/6 bg-black" src="logo.png" alt="Gerremy's Website"/>
        <button className="w-1/6 bg-white">Download Resume</button>
        <button className="w-1/6 bg-white">GitHub</button>
        <button className="w-1/6 bg-white">Linkedin</button>
        <button className="w-1/6 mr-6 bg-white">Email</button>
      </div>
      <div className="flex justify-between pt-6 pr-12">
        <div>
          <h1 className="text-[36px] -mb-4 font-accent">Hello, I'm</h1>
          <h1 className="text-[60px]">Gerremy</h1>
          <h1 className="text-[60px] -mt-8">Ferguson</h1>
          <div>-------------------------------------------</div>
          <div className="bg-white">Software Engineer</div>
          <div className="pl-6 bg-white">-----</div>
          <p className="text-wrap max-w-96 bg-white">I build modern, scalable enterprise solutions that automate processes, empower teams, and deliver exceptional experiences, internally and externally.</p>
        </div>
        <img className="h-96 w-96 pl-12" src="headshot.png" alt="Gerremy's Headshot"/>
      </div>
    </div>
  );
}
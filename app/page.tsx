import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col font-heading pt-12 pl-6">
      <div className="flex item-stretch scale-15">
        <img src="logo.png" alt="Gerremy's Website"/>
        <div></div>
      </div>
      <h1 className="text-[36px] -mb-4 font-accent">Hello, I'm</h1>
      <h1 className="text-[60px]">Gerremy</h1>
      <h1 className="text-[60px] -mt-8">Ferguson</h1>
      <div>-------------------------------------------</div>
      <div>Software Engineer</div>
      <div className="pl-6">-----</div>
      <p className="text-wrap max-w-96">I build modern, scalable enterprise solutions that automate processes, empower teams, and deliver exceptional experiences, internally and externally.</p>
    </div>
  );
}
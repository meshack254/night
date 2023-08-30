import ThemeSwitch from "./theme";

export default function Home() {
  return (
    <main className="h-[100vh] bg-white dark:bg-slate-900"> 
      <ThemeSwitch />
      <h1 className="text-black dark:text-white text-5xl font-bold">Hello World!</h1>
    </main>
  );
}

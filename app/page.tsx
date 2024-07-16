import Header from "@/components/Header";
import Transaction from "@/components/Transaction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <section>
        <Header/>
        <Transaction/>
      </section>
    </main>
  );
}

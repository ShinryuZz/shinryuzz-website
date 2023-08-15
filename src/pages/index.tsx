import TopContent from "@/components/top/TopContent";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <TopContent />
      <div className="stars"></div>
    </div>
  );
}

// (mobile filters)

export default function FilterDrawer({
  open,
  setOpen,
  selectedExts,
  setSelectedExts,
}: any) {
  if (!open) return null;

  return (
    <div className="fixed right-0 top-0 w-80 bg-white h-full shadow-xl">
      <button onClick={() => setOpen(false)}>Kapat</button>

      <p>Filtreler</p>
    </div>
  );
}

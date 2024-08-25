

export default function Header() {
  return (
    <header className="h-full p-3 -mt-6 text-white w-full bg-slate-700 flex justify-between gap-4">
      <span className="flex flex-start">Logotipo</span>
      <span className="flex flex-end w-1/3 gap-4 justify-end">
        <span>Contato</span>
        <span>Sobre Mim</span>
        <span>Currículo</span>
        <span>Serviços</span>
        <span>Sobre o Projeto</span>
      </span>
    </header>
  )
}

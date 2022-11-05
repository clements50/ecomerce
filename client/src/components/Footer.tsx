const Footer = () => {
  return (
    <footer className="bg-zinc-800">
      <div className=" w-9/12 m-auto flex items-center justify-center py-3">
        <p className="text-white">
          Cody Clements Copyright &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

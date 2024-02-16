import SideBarLayout from "../SideBarLayout/SideBarLayout";

export default function Home() {
  return (
    <main>
      <SideBarLayout>
        <h1 className="text-2xl">
          <b>Home</b>
        </h1>
        <div className="text-xl">
          <p>Welcome to Portfolio Tracker!</p>
        </div>
        <div>
          <p>
            The main goal of this responsive application is to allow users to
            track their investments. It also allows creating a list of users,
            editing and deleting them.
          </p>
        </div>{" "}
        <div>
          <p>
            This application has been built as part of the application process
            for Dynamo Software.
          </p>
        </div>
      </SideBarLayout>
    </main>
  );
}

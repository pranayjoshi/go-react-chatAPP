/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LOyl5Wee15h
 */

export default function Chat() {
  return (
    <div className="h-full 2-full">
      <main className="container mx-auto p-6 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2 text-indigo-700">Chat</h2>
            <div
              dir="ltr"
              className="relative overflow-hidden h-96 mb-4 bg-gray-200 p-4 rounded-md overflow-y-auto"
              // ="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
            >
              <style></style>
              <div
                className="h-full w-full rounded-[inherit]"
                //   style="overflow: hidden scroll;"
              >
                <div className="min-w-full table ">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <span className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-full"></span>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-bold text-indigo-600">
                            User Name
                          </h3>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-blue-200 text-blue-800">
                            10:00 AM
                          </div>
                        </div>
                        <p className="text-gray-700">Hello! How are you?</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-full"></span>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-bold text-indigo-600">
                            User Name
                          </h3>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-blue-200 text-blue-800">
                            10:05 AM
                          </div>
                        </div>
                        <p className="text-gray-700">
                          I'm doing great, thank you!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center space-x-2">
              <input
                className="flex h-10 w-full border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Type your message here..."
                type="text"
              />
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                Send
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg leading-6 font-medium text-indigo-700">
                  Online Users
                </h3>
              </div>
              <div className="p-6">
                <ul className="divide-y divide-gray-200">
                  <li className="py-4 flex">
                    <span className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-full"></span>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        User Name 1
                      </p>
                    </div>
                  </li>
                  <li className="py-4 flex">
                    <span className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-full"></span>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        User Name 2
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

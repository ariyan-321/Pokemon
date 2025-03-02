import React from "react";

export default function Blog() {
  return (
    <div>
      <div className="flex justify-center my-7">
        <img src="/images/Title.png" alt="Blog Title" />
      </div>

      {/* for mobile */}

      <div className="md:hidden">
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
          ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi
          tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque.
          Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta
          amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit
          pretium lorem elementum. Iaculis sit maecenas sodales mi convallis
          justo aliquam. Tincidunt semper ut ornare vivamus lectus.
        </p>

        <div className="h-[500px] p-2 flex gap-3 w-[100%]">
 <div className="mt-[100px]">
 <img src="images/Image04.png" className="w-[100%] " alt="Image 1" />
 </div>
  <div className="space-y-2">
  <img src="images/Image03.png" className="w-full" alt="Image 2" />
  <img src="images/Image02.png" className="w-full" alt="Image 3" />
  </div>
  <div className="space-y-3 mt-[100px]">
  <img src="images/Image04.png" className="w-full" alt="Image 4" />
  <img src="images/Image01.png" className="w-full" alt="Image 5" />
  </div>
</div>

        <p className="px-5">
          Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
          ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi
          tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque.
          Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta
          amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit
          pretium lorem elementum. Iaculis sit maecenas sodales mi convallis
          justo aliquam. Tincidunt semper ut ornare vivamus lectus.
        </p>
      </div>
    </div>
  );
}

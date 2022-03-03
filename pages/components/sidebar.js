import React from "react";
import {
  DonutLarge as DonutLargeIcon,
  ClearAll as ClearAllIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  SyncAlt as SyncAltIcon,
  Layers as LayersIcon,
  Lock as LockIcon,
  Eco as EcoIcon
} from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="md:w-1/3 w-6/12 h-screen shadow-2xl">
      <div className="border flex justify-around">
        <p className="text-lg font-semibold">elrond</p>
        <p>|</p>
        <p className="text-gray-400 text-lg">wallet</p>
      </div>
      <div className="p-4 space-y-14">
        <div className="space-y-4">
          <h1 className="text-gray-400">menu</h1>
          <div>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              <DonutLargeIcon className="text-gray-300" />
              <p>Dashboard</p>
            </div>
          </div>
          <div>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              <ClearAllIcon className="text-gray-300" />
              <p className="text-gray-600">Transaction</p>
            </div>
          </div>
          <div>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              <ArrowUpwardIcon className="text-gray-300" />
              <p className="text-gray-600">Send</p>
            </div>
          </div>
          <div>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              <ArrowDownwardIcon className="text-gray-300" />
              <p className="text-gray-600">Receive</p>
            </div>
          </div>
          <div>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              <SyncAltIcon className="text-gray-300" />
              <p className="text-gray-600">Buy</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-gray-400">Delegation</h1>
          <div>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              <LockIcon className="text-gray-300" />
              <p className="text-gray-600">Delegate</p>
            </div>
          </div>
          <div>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              <EcoIcon className="text-gray-300" />
              <p className="text-gray-600">Claim Reward</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-gray-400">taking</h1>
          <div>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              <LayersIcon className="text-gray-300" />
              <p className="text-gray-600">Validate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

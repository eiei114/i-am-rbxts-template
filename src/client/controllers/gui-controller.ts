import { Controller, OnStart } from "@flamework/core";
import { Players } from "@rbxts/services";
@Controller({})
export class GuiController implements OnStart {
	private playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

	onStart() {
		print(`GuiController initialized`);
	}
}

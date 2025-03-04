import { OnInit, Service } from "@flamework/core";

@Service()
export class PlayersService implements OnInit {
	onInit() {
		print(`PlayersService initialized`);
	}
}

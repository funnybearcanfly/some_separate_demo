export class SearchCriteria {
    public Label: String;
    public Options: String[];
    public SelectedOption: String;
    public Value: String;

    constructor(Label: String) {
        this.Label = Label;
        this.Value = Label;
        this.Options = ["start with", "end with", "contains"];
     }
}